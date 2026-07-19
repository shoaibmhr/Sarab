// src/admin/components/messages/MessageDetail.jsx
import { Mail, Phone, Trash2, MailOpen } from "lucide-react";

const MessageDetail = ({ message, onDelete }) => {
  if (!message) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
        <MailOpen size={36} className="text-slate-300" />
        <p className="mt-3 text-sm font-medium text-slate-500">
          Koi message select karein dekhne ke liye
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-slate-800">
            {message.subject}
          </h3>
          <p className="mt-1 text-sm font-semibold text-slate-700">
            {message.name}
          </p>
          <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Mail size={12} />
              {message.email}
            </span>
            <span className="flex items-center gap-1">
              <Phone size={12} />
              {message.phone}
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            {message.date} · {message.time}
          </p>
        </div>

        <button
          onClick={() => onDelete(message)}
          className="flex-shrink-0 rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 p-3.5">
        <p className="text-sm leading-relaxed text-slate-600">
          {message.message}
        </p>
      </div>

      
       <a href={`mailto:${message.email}?subject=Re: ${message.subject}`}
        className="
          mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600
          py-2 text-sm font-semibold text-white shadow-sm
          transition-all duration-300 hover:bg-orange-700 sm:w-auto sm:px-4
        "
      >
        <Mail size={15} />
        Reply via Email
      </a>
    </div>
  );
};

export default MessageDetail;