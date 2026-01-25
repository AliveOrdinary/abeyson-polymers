
import { Product } from '@/lib/data';

interface SpecTableProps {
  specs: Record<string, string | string[]>;
  productName: string;
}

export function SpecTable({ specs, productName }: SpecTableProps) {
  return (
    <div className="w-full overflow-hidden border border-border">
      <table className="w-full text-sm text-left">
        <thead className="bg-muted text-foreground font-semibold uppercase text-xs">
          <tr>
            <th className="px-4 py-3 border-b border-border">Specification</th>
            <th className="px-4 py-3 border-b border-border">Details</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(specs).map(([key, value], index) => (
            <tr key={key} className={index % 2 === 0 ? "bg-card" : "bg-muted/50"}>
              <td className="px-4 py-3 font-medium text-foreground border-b border-border">{key}</td>
              <td className="px-4 py-3 text-muted-foreground border-b border-border">
                {Array.isArray(value) ? (
                  <div className="flex flex-wrap gap-2">
                    {value.map((v, i) => (
                      <span key={i} className="bg-muted px-2 py-1 text-xs border border-border">
                        {v}
                      </span>
                    ))}
                  </div>
                ) : (
                  value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
