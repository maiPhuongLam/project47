import { useGetUser, useUpdateUser } from "@/api/UserApi";
import UserProfileForm from "@/forms/user-profile-forms/UserProfileForm";

const UserProfilePage = () => {
  const { updateUser, isLoading: isUpdateLoading } = useUpdateUser();
  const { currentUser, isLoading: isGetLoading } = useGetUser()
  if (isGetLoading) {
    return <span>Đang tải...</span>
  }

  if (!currentUser) {
    return <span>Không thể cập nhật thông tin</span>;
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  )
}

export default UserProfilePage
