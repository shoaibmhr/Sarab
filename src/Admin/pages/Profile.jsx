// src/admin/pages/Profile.jsx
import { useState } from "react";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileInfoForm from "../components/profile/ProfileInfoForm";
import ChangePasswordForm from "../components/profile/ChangePasswordForm";

import { profileData } from "../constants/profileData";

const Profile = () => {
  const [profile, setProfile] = useState(profileData);

  const handleAvatarChange = (newAvatar) => {
    setProfile((prev) => ({ ...prev, avatar: newAvatar }));
  };

  const handleAvatarRemove = () => {
    setProfile((prev) => ({ ...prev, avatar: "" }));
  };

  const handleInfoSave = (formData) => {
    setProfile((prev) => ({ ...prev, ...formData }));
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Profile</h1>
        <p className="mt-1 text-sm text-slate-500">
          Apna account manage karein.
        </p>
      </div>

      <ProfileHeader
        profile={profile}
        onAvatarChange={handleAvatarChange}
        onAvatarRemove={handleAvatarRemove}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ProfileInfoForm profile={profile} onSave={handleInfoSave} />
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default Profile;
