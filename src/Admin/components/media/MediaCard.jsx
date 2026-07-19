// src/admin/components/media/MediaCard.jsx
import { useState } from "react";
import { Copy, Trash2, Check } from "lucide-react";

const MediaCard = ({ media, onDelete }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(media.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className="
        group overflow-hidden rounded-2xl border border-slate-100
        bg-white shadow-sm transition-all duration-300 hover:shadow-md
      "
    >
      <div className="relative h-28 w-full overflow-hidden bg-slate-100 sm:h-32">
        <img
          src={media.url}
          alt={media.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />

        {/* Hover overlay actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
          <button
            onClick={handleCopy}
            className="rounded-lg bg-white/90 p-2 text-slate-700 transition hover:bg-white"
            title="Copy URL"
          >
            {copied ? (
              <Check size={15} className="text-green-600" />
            ) : (
              <Copy size={15} />
            )}
          </button>
          <button
            onClick={() => onDelete(media)}
            className="rounded-lg bg-white/90 p-2 text-red-500 transition hover:bg-white"
            title="Delete"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>

      <div className="p-2.5">
        <p className="truncate text-xs font-semibold text-slate-700">
          {media.name}
        </p>
        <p className="mt-0.5 text-[11px] text-slate-400">
          {media.size} · {media.type}
        </p>
      </div>
    </div>
  );
};

export default MediaCard;
