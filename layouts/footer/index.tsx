import FacebookIframe from '@/components/fb-iframe'
import Link from 'next/link'
import Image from 'next/image'
import logoIT from '@/assets/images/logo-it.png'
import logoHusc from '@/assets/images/logo-husc.png'
import logoDhh from '@/assets/images/logo-dhh.png'
export default function Footer() {
  return (
    <div className="bg-[#003056] full-container text-white">
      <div
        className="grid xl:grid-cols-4 xl:grid-rows-1
      md:grid-cols-2 md:grid-rows-2
      grid-cols-1 grid-rows-4
       gap-6"
      >
        <div>
          <h2 className="text-lg font-semibold">Trang chủ</h2>
          <hr className="my-3" />
          <div>
            FacebookIframe
            {/* <FacebookIframe /> */}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">CLB Hỗ trợ lập trình</h2>
          <hr className="my-3" />
          <div>
            <div className="flex items-center mb-3">
              <i className="w-4 fa-solid fa-location-dot"></i>
              <p className="ml-2 pb-[2px]">77 Nguyễn Huệ, Huế</p>
            </div>
            <div className="flex items-center mb-3">
              <i className="w-4 fa-solid fa-phone"></i>
              <p className="ml-2 pb-[2px]">070 229 1317</p>
            </div>
            <div className="flex items-center mb-3">
              <i className="w-4 fa-solid fa-envelope-dot"></i>
              <p className="ml-2 pb-[2px]">clbhtlt.ithusc@gmail.com</p>
            </div>
            <div className="flex items-center mb-3">
              <i className="w-4 fa-brands fa-facebook"></i>
              <p className="ml-2 pb-[2px]">facebook.com/clhtlt.ithusc</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Truy cập nhanh</h2>
          <hr className="my-3" />
          <div>
            <Link
              href="/"
              className="flex items-center hover:text-blue-500 transition"
            >
              <i className="w-3 fa-solid fa-caret-right"></i>
              <p className="ml-2 pb-[3px]">Trang chủ</p>
            </Link>
            <Link
              href="/about"
              className="flex items-center hover:text-blue-500 transition"
            >
              <i className="w-3 fa-solid fa-caret-right"></i>
              <p className="ml-2 pb-[3px]">Giới thiệu</p>
            </Link>
            <Link
              href="/activities"
              className="flex items-center hover:text-blue-500 transition"
            >
              <i className="w-3 fa-solid fa-caret-right"></i>
              <p className="ml-2 pb-[3px]">Hoạt động</p>
            </Link>
            <Link
              href="/posts"
              className="flex items-center hover:text-blue-500 transition"
            >
              <i className="w-3 fa-solid fa-caret-right"></i>
              <p className="ml-2 pb-[3px]">Bài viết</p>
            </Link>
            <Link
              href="/membership"
              className="flex items-center hover:text-blue-500 transition"
            >
              <i className="w-3 fa-solid fa-caret-right"></i>
              <p className="ml-2 pb-[3px]">Tuyển thành viên</p>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Liên kết</h2>
          <hr className="my-3" />
          <div>
            <Link
              href="https://it.husc.edu.vn/"
              target="_blank"
              className="flex items-center mb-2 hover:text-blue-500 transition"
            >
              <div className="w-9 center">
                <Image
                  src={logoIT}
                  alt="Logo Khoa CNTT"
                  className="w-9 h-9"
                  width={35}
                  height={35}
                />
              </div>
              <div className="ml-2 flex flex-col justify-between">
                <p className="pt-0">Khoa Công nghệ thông tin</p>
                <p className="text-xs opacity-70 text-blue-300">
                  Faculty of Information Technology
                </p>
              </div>
            </Link>
            <Link
              href="http://husc.hueuni.edu.vn/news.php"
              target="_blank"
              className="flex items-center mb-2 hover:text-blue-500 transition"
            >
              <div className="w-9 center">
                <Image
                  src={logoHusc}
                  alt="Logo Đại học Khoa học"
                  width={30}
                  height={30}
                  className="w-9 h-9"
                />
              </div>
              <div className="ml-2 flex flex-col justify-between">
                <p className="pt-0">Đại học Khoa học</p>
                <p className="text-xs opacity-70 text-blue-300">
                  Hue University of Sciences
                </p>
              </div>
            </Link>
            <Link
              href="https://hueuni.edu.vn/portal/vi/"
              target="_blank"
              className="flex items-center mb-2 hover:text-blue-500 transition"
            >
              <div className="w-9 center">
                <Image
                  src={logoDhh}
                  alt="Logo Đại học Huế"
                  className="w-9 h-9"
                  width={32}
                  height={32}
                />
              </div>
              <div className="ml-2 flex flex-col justify-between">
                <p className="pt-0">Đại học Huế</p>
                <p className="text-xs opacity-70 text-blue-300">
                  Hue University
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <hr className="h-[2px] border-none bg-slate-50 opacity-50" />
        <p className="text-center pt-2 font-semibold">
          © 2025 Khanh Nguyen - CLB Hỗ trợ lập trình
        </p>
      </div>
    </div>
  )
}
