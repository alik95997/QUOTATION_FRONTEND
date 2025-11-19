const SidebarProfile = ({ name, role, onClick }) => (
  <div onClick={onClick} className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
    <RxAvatar />
    <div>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  </div>
);

export default SidebarProfile;
