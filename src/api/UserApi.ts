import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
}

export const useGetUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getUserRequest = async (): Promise<User> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/v1/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Truy cập thông tin thất bại");
    }

    return response.json();
  };

  const {
    data: currentUser,
    isLoading,
    error,
  } = useQuery("fetchCurrentUser", getUserRequest);

  if (error) {
    toast.error(error.toString());
  }

  return { currentUser, isLoading };
};

export const useCreateUser = () => {
  const { getAccessTokenSilently } = useAuth0()
  const createUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently()
    const response = await fetch(`${API_BASE_URL}/api/v1/users`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    if (!response.ok) {
      throw new Error('Tạo tài khoản thất bại')
    }
  }

  const { mutateAsync: creatUser, isLoading, isError, isSuccess } = useMutation(createUserRequest)

  return { creatUser, isLoading, isError, isSuccess }
}

type UpdateMyUserRequest = {
  name: string;
  phone: string
  addressLine1: string;
  district: string;
  province: string;
};

export const useUpdateUser = () => {
  const { getAccessTokenSilently } = useAuth0()
  const updateUserRequest = async (formData: UpdateMyUserRequest) => {
    const accessToken = await getAccessTokenSilently()
    const response = await fetch(`${API_BASE_URL}/api/v1/users`, {
      method: 'PUT', 
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (!response.ok) {
      throw new Error("Cập nhật thông tin thất bại");
    }

    return response.json();
  }

  const {
    mutateAsync: updateUser,
    isLoading,
    isSuccess,
    error,
    reset,
  } = useMutation(updateUserRequest);

  if (isSuccess) {
    toast.success("Cập nhật thông tin thành công!");
  }

  if (error) {
    toast.error(error.toString());
    reset();
  }

  return { updateUser, isLoading };
}