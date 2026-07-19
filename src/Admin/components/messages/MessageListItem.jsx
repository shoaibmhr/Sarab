// src/admin/components/messages/MessageListItem.jsx
const MessageListItem = ({ message, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full border-b border-slate-50 p-3.5 text-left transition-all duration-300
        last:border-none
        ${isActive ? "bg-orange-50" : "hover:bg-slate-50"}
      `}
    >
      <div className="flex items-center justify-between gap-2">
        <p
          className={`truncate text-sm ${
            message.isRead
              ? "font-medium text-slate-600"
              : "font-bold text-slate-800"
          }`}
        >
          {message.name}
        </p>
        {!message.isRead && (
          <span className="h-2 w-2 flex-shrink-0 rounded-full bg-orange-600" />
        )}
      </div>
      <p
        className={`mt-0.5 truncate text-sm ${
          message.isRead ? "text-slate-500" : "font-semibold text-slate-700"
        }`}
      >
        {message.subject}
      </p>
      <p className="mt-1 truncate text-xs text-slate-400">{message.message}</p>
      <p className="mt-1 text-[11px] text-slate-400">
        {message.date} · {message.time}
      </p>
    </button>
  );
};

export default MessageListItem;
