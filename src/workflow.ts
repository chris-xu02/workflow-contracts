/** Cross-frontend workflow snapshot — single source of truth for integration tests. */

export type WorkflowStep = {
  id: string;
  label: string;
  serviceOwner: "python" | "nestjs";
};

export type RemoteWorkflow = {
  workflowId: string;
  machineId: string;
  steps: WorkflowStep[];
  version: number;
};

export function assertWorkflowVersion(
  clientVersion: number,
  server: RemoteWorkflow,
): void {
  if (clientVersion !== server.version) {
    throw new Error(
      `Stale workflow v${clientVersion}; server is v${server.version}`,
    );
  }
}