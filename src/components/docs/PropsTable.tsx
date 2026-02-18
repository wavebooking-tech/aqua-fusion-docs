export interface PropDefinition {
  /** The prop name */
  name: string;
  /** The TypeScript type of the prop */
  type: string;
  /** The default value, if any */
  default?: string;
  /** A description of what the prop does */
  description: string;
  /** Whether the prop is required */
  required?: boolean;
}

export type PropsTableProps = {
  /** Array of prop definitions to render in the table */
  props: PropDefinition[];
};

/**
 * PropsTable
 *
 * Renders a styled table of component prop definitions with columns
 * for name, type, default value, and description.
 */
export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-x-auto rounded-ui-lg border border-line">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface-subtle text-left">
            <th className="px-4 py-3 font-medium text-content-secondary">
              Prop
            </th>
            <th className="px-4 py-3 font-medium text-content-secondary">
              Type
            </th>
            <th className="px-4 py-3 font-medium text-content-secondary">
              Default
            </th>
            <th className="px-4 py-3 font-medium text-content-secondary">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {props.map((prop) => (
            <tr
              key={prop.name}
              className="transition-colors hover:bg-surface-subtle"
            >
              <td className="px-4 py-3 whitespace-nowrap">
                <code className="rounded-ui-sm bg-surface-muted px-1.5 py-0.5 text-xs font-semibold text-primary-700">
                  {prop.name}
                </code>
                {prop.required && (
                  <span
                    className="ml-1 text-red-500"
                    title="Required"
                    aria-label="Required"
                  >
                    *
                  </span>
                )}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className="font-mono text-xs text-content-secondary">
                  {prop.type}
                </span>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                {prop.default ? (
                  <code className="font-mono text-xs text-content-secondary">
                    {prop.default}
                  </code>
                ) : (
                  <span className="text-content-tertiary">-</span>
                )}
              </td>
              <td className="px-4 py-3 text-content-secondary">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
