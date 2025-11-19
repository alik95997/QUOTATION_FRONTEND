import { IoMdNotificationsOutline } from "react-icons/io";

const NotificationButton = ({ icon }) => (
  <button className="px-3 py-1 border border-[#00000014] rounded hover:bg-gray-100">
    <IoMdNotificationsOutline />
  </button>
);

export default NotificationButton;
