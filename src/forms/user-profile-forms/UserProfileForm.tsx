import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "name is required"),
  phone: z.string().min(1, "phone is required"),
  addressLine1: z.string().min(1, "Address Line 1 is required"),
  district: z.string().min(1, "district is required"),
  province: z.string().min(1, "province is required"),
});

export type UserFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser: User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
  title?: string;
  buttonText?: string;
};

const UserProfileForm = ({
  onSave,
  isLoading,
  currentUser,
  title = "Hồ sơ cá nhân",
  buttonText = "Xác nhận",
}: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-gray-50 rounded-lg md:p-10"
      >
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <FormDescription>
            Xem và thay đổi thông tin cá nhân tại đây
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled className="bg-gray-700" />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Tên</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-gray-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Số điện thoại</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-gray-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        

        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Địa chỉ</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-gray-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Quận/Huyện</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-gray-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Tỉnh/Thành phố</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-gray-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit" className="bg-orange-700">
            {buttonText}
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;
