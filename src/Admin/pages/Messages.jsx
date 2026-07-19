// src/admin/pages/Messages.jsx
import { useState, useMemo } from "react";
import { Search } from "lucide-react";

import MessageListItem from "../components/messages/MessageListItem";
import MessageDetail from "../components/messages/MessageDetail";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";

import { messagesData } from "../constants/messagesData";

const Messages = () => {
  const [messages, setMessages] = useState(messagesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [deletingMessage, setDeletingMessage] = useState(null);

  const filteredMessages = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return messages.filter(
      (m) =>
        m.name.toLowerCase().includes(term) ||
        m.subject.toLowerCase().includes(term),
    );
  }, [messages, searchTerm]);

  const unreadCount = messages.filter((m) => !m.isRead).length;
  const selectedMessage = messages.find((m) => m.id === selectedId) || null;

  const handleSelect = (message) => {
    setSelectedId(message.id);
    // Message open karte hi read mark ho jaye
    if (!message.isRead) {
      setMessages((prev) =>
        prev.map((m) => (m.id === message.id ? { ...m, isRead: true } : m)),
      );
    }
  };

  const handleDeleteClick = (message) => {
    setDeletingMessage(message);
  };

  const handleConfirmDelete = () => {
    setMessages((prev) => prev.filter((m) => m.id !== deletingMessage.id));
    if (selectedId === deletingMessage.id) setSelectedId(null);
    setDeletingMessage(null);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Messages</h1>
        <p className="mt-1 text-sm text-slate-500">
          Customer inquiries aur contact form submissions.
          {unreadCount > 0 && (
            <span className="ml-1.5 font-semibold text-orange-600">
              ({unreadCount} unread)
            </span>
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Message List */}
        <div className="rounded-2xl border border-slate-100 bg-white shadow-sm lg:col-span-1">
          <div className="border-b border-slate-100 p-3">
            <div className="relative">
              <Search
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search messages..."
                className="
                  w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-4
                  text-sm text-slate-700 outline-none
                  transition-all duration-300
                  focus:border-orange-400 focus:ring-2 focus:ring-orange-100
                "
              />
            </div>
          </div>

          <div className="max-h-[520px] overflow-y-auto">
            {filteredMessages.length > 0 ? (
              filteredMessages.map((message) => (
                <MessageListItem
                  key={message.id}
                  message={message}
                  isActive={selectedId === message.id}
                  onClick={() => handleSelect(message)}
                />
              ))
            ) : (
              <p className="p-4 text-center text-sm text-slate-400">
                Koi message nahi mila
              </p>
            )}
          </div>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2">
          <MessageDetail
            message={selectedMessage}
            onDelete={handleDeleteClick}
          />
        </div>
      </div>

      <ConfirmDeleteModal
        isOpen={!!deletingMessage}
        onClose={() => setDeletingMessage(null)}
        onConfirm={handleConfirmDelete}
        itemName={`message from ${deletingMessage?.name}`}
      />
    </div>
  );
};

export default Messages;
