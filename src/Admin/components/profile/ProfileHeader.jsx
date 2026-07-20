// src/admin/components/profile/ProfileHeader.jsx
import { Camera, UserCircle2, X } from "lucide-react";

const ProfileHeader = ({ profile, onAvatarChange, onAvatarRemove }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    onAvatarChange(URL.createObjectURL(file));
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        {/* Avatar */}
        <div className="relative">
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-orange-50">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <UserCircle2 size={44} className="text-orange-300" />
            )}
          </div>

          {/* Remove button — sirf tab dikhega jab avatar mojood ho */}
          {profile.avatar && (
            <button
              type="button"
              onClick={onAvatarRemove}
              title="Remove photo"
              className="
                absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center
                rounded-full border-2 border-white bg-slate-600 text-white shadow-sm
                transition-all duration-300 hover:bg-red-500
              "
            >
              <X size={12} />
            </button>
          )}

          <label
            className="
              absolute bottom-0 right-0 flex h-7 w-7 cursor-pointer items-center
              justify-center rounded-full border-2 border-white bg-orange-600
              text-white shadow-sm transition-all duration-300 hover:bg-orange-700
            "
          >
            <Camera size={13} />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Info */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-bold text-slate-800">{profile.name}</h2>
          <p className="text-sm text-slate-500">{profile.email}</p>
          <span className="mt-1.5 inline-block rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-600">
            {profile.role}
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-50 pt-4 text-center sm:text-left">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Joined
          </p>
          <p className="mt-0.5 text-sm font-medium text-slate-700">
            {profile.joinDate}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Last Login
          </p>
          <p className="mt-0.5 text-sm font-medium text-slate-700">
            {profile.lastLogin}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
