import React from 'react';

const AuthenticationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="max-w-5xl w-full flex justify-between space-x-4 gap-1">
        {/* Login Form */}
        <div className="bg-gray-800 p-8 rounded-lg w-5/12">
          <h2 className="text-2xl font-bold mb-6">Đăng nhập tài khoản</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Email *</label>
              <input
                type="email"
                className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                placeholder="Tài khoản hoặc địa chỉ email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Mật khẩu *</label>
              <input
                type="password"
                className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                placeholder="Mật khẩu"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <a href="#" className="text-orange-700 text-sm">Quên mật khẩu?</a>
            </div>
            <button type="submit" className="w-full p-2 bg-orange-700 rounded">
              ĐĂNG NHẬP
            </button>
          </form>
        </div>

        {/* Register Form */}
        <div className="bg-gray-800 p-8 rounded-lg w-7/12">
          <h2 className="text-2xl font-bold mb-6">Đăng ký tài khoản</h2>
          <form>
            <div className='w-full flex mb-4 gap-6'>
              <div className="mb-4 w-1/2">
                <label className="block mb-2 text-sm font-medium">Họ *</label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                  placeholder="Họ"
                />
              </div>
              <div className="mb-4 w-1/2">
                <label className="block mb-2 text-sm font-medium">Tên đệm và tên *</label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                  placeholder="Tên đệm và tên"
                />
              </div>
            </div>
            <div className='w-full flex mb-4 gap-6'>
              <div className="mb-4 w-1/2">
                <label className="block mb-2 text-sm font-medium">Địa chỉ email *</label>
                <input
                  type="email"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4 w-1/2">
                <label className="block mb-2 text-sm font-medium">Số điện thoại *</label>
                <input
                  type="tel"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                  placeholder="Số điện thoại"
                />
            </div>
            </div>
            <div className='w-full flex mb-4 gap-6'>
              <div className="mb-4 w-1/2">
                <label className="block mb-2 text-sm font-medium">Mật khẩu *</label>
                <input
                  type="password"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                  placeholder="Mật khẩu"
                />
              </div>
              <div className="mb-4 w-1/2">
                <label className="block mb-2 text-sm font-medium">Nhập lại mật khẩu *</label>
                <input
                  type="password"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                  placeholder="Nhập lại mật khẩu"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Ngày sinh *</label>
              <div className="flex space-x-2">
                <select className="w-1/3 p-2 rounded bg-gray-700 border border-gray-600">
                  <option>Chọn ngày</option>
                </select>
                <select className="w-1/3 p-2 rounded bg-gray-700 border border-gray-600">
                  <option>Chọn tháng</option>
                </select>
                <select className="w-1/3 p-2 rounded bg-gray-700 border border-gray-600">
                  <option>Chọn năm</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Tỉnh/Thành phố *</label>
              <select className="w-full p-2 rounded bg-gray-700 border border-gray-600">
                <option>Hồ Chí Minh</option>
              </select>
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm">Tôi đã đọc, hiểu và đồng ý với các <a href="#" className="text-orange-700">điều khoản</a></label>
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm">Nhận thông tin chương trình khuyến mãi</label>
            </div>
            <button type="submit" className="w-full p-2 bg-orange-700 rounded">
              ĐĂNG KÝ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
