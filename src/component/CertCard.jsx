import { ChevronRight } from "lucide-react";

function CertificateCard({ image, title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group w-[220px] flex-shrink-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 cursor-pointer dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex h-[170px] flex-col p-3">
        <h3 className="text-sm font-semibold">{title}</h3>

        <p className="mt-2 flex-1 text-xs leading-5 text-muted-foreground line-clamp-3">
          {description}
        </p>

        <div className="my-2 border-t border-zinc-200 dark:border-zinc-800" />

        <button className="inline-flex items-center justify-between text-xs font-medium cursor-pointer text-accent">
          <span>View Certificate</span>
          <ChevronRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}

export default CertificateCard;
