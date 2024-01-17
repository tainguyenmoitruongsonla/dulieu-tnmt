// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { Functions, PeopleAltOutlined, Tv } from '@mui/icons-material';


const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Trang chủ',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Dữ liệu đất đai',
      primaryPath: 'dat-dai',
      children: [
        {
          title: 'Dữ liệu chung',
          path: '/dat-dai/chung'
        },
        {
          title: 'Dữ liệu phòng',
          path: '/dat-dai/phong'
        },
        {
          title: 'Văn bản quy phạm pháp luật',
          path: '/dat-dai/van-ban'
        },
        {
          title: 'Cá nhân',
          path: '/dat-dai/ca-nhan'
        }
      ]
    },
    {
      title: 'Dữ liệu giá đất & GPMB',
      primaryPath: 'gia-dat-gpmb',
      children: [
        {
          title: 'Dữ liệu chung',
          path: '/gia-dat-gpmb/chung'
        },
        {
          title: 'Dữ liệu phòng',
          path: '/gia-dat-gpmb/phong'
        },
        {
          title: 'Văn bản quy phạm pháp luật',
          path: '/gia-dat-gpmb/van-ban'
        },
        {
          title: 'Cá nhân',
          path: '/gia-dat-gpmb/ca-nhan'
        }
      ]
    },
    {
      title: 'Dữ liệu TNN, KS, KTTV',
      primaryPath: 'tnn-ks-kttv',
      children: [
        {
          title: 'Dữ liệu chung',
          path: '/tnn-ks-kttv/chung'
        },
        {
          title: 'Dữ liệu phòng',
          path: '/tnn-ks-kttv/phong'
        },
        {
          title: 'Văn bản quy phạm pháp luật',
          path: '/tnn-ks-kttv/van-ban'
        },
        {
          title: 'Cá nhân',
          path: '/tnn-ks-kttv/ca-nhan'
        }
      ]
    },
    {
      title: 'Dữ liệu môi trường',
      primaryPath: 'moi-truong',
      children: [
        {
          title: 'Dữ liệu chung',
          path: '/moi-truong/chung'
        },
        {
          title: 'Dữ liệu phòng',
          path: '/moi-truong/phong'
        },
        {
          title: 'Văn bản quy phạm pháp luật',
          path: '/moi-truong/van-ban'
        },
        {
          title: 'Cá nhân',
          path: '/moi-truong/ca-nhan'
        }
      ]
    },
    {
      title: 'Dữ liệu thanh tra',
      primaryPath: 'thanh-tra',
      children: [
        {
          title: 'Dữ liệu chung',
          path: '/thanh-tra/chung'
        },
        {
          title: 'Dữ liệu phòng',
          path: '/thanh-tra/phong'
        },
        {
          title: 'Văn bản quy phạm pháp luật',
          path: '/thanh-tra/van-ban'
        },
        {
          title: 'Cá nhân',
          path: '/thanh-tra/ca-nhan'
        }
      ]
    },
    {
      title: 'Dữ liệu văn phòng',
      primaryPath: 'van-phong',
      children: [
        {
          title: 'Dữ liệu chung',
          path: '/van-phong/chung'
        },
        {
          title: 'Dữ liệu phòng',
          path: '/van-phong/phong'
        },
        {
          title: 'Văn bản quy phạm pháp luật',
          path: '/van-phong/van-ban'
        },
        {
          title: 'Cá nhân',
          path: '/van-phong/ca-nhan'
        }
      ]
    },
    {
      title: 'Dữ liệu VP đăng ký đất đai',
      primaryPath: 'dang-ky-dat-dai',
      children: [
        {
          title: 'Dữ liệu chung',
          path: '/dang-ky-dat-dai/chung'
        },
        {
          title: 'Dữ liệu phòng',
          path: '/dang-ky-dat-dai/phong'
        },
        {
          title: 'Văn bản quy phạm pháp luật',
          path: '/dang-ky-dat-dai/van-ban'
        },
        {
          title: 'Cá nhân',
          path: '/dang-ky-dat-dai/ca-nhan'
        }
      ]
    },
    {
      title: 'Dữ liệu quan trắc MT',
      primaryPath: 'quan-trac',
      children: [
        {
          title: 'Dữ liệu chung',
          path: '/quan-trac/chung'
        },
        {
          title: 'Dữ liệu phòng',
          path: '/quan-trac/phong'
        },
        {
          title: 'Văn bản quy phạm pháp luật',
          path: '/quan-trac/van-ban'
        },
        {
          title: 'Cá nhân',
          path: '/quan-trac/ca-nhan'
        }
      ]
    },
    {
      title: 'Dữ liệu CNTT',
      primaryPath: 'cntt',
      children: [
        {
          title: 'Dữ liệu chung',
          path: '/cntt/chung'
        },
        {
          title: 'Dữ liệu phòng',
          path: '/cntt/phong'
        },
        {
          title: 'Văn bản quy phạm pháp luật',
          path: '/cntt/van-ban'
        },
        {
          title: 'Cá nhân',
          path: '/cntt/ca-nhan'
        }
      ]
    },
    {
      title: 'Dữ liệu phát triển quỹ đất',
      primaryPath: 'quy-dat',
      children: [
        {
          title: 'Dữ liệu chung',
          path: '/quy-dat/chung'
        },
        {
          title: 'Dữ liệu phòng',
          path: '/quy-dat/phong'
        },
        {
          title: 'Văn bản quy phạm pháp luật',
          path: '/quy-dat/van-ban'
        },
        {
          title: 'Cá nhân',
          path: '/quy-dat/ca-nhan'
        }
      ]
    },
    {
      title: 'Nội dung khác',
      path: '#'
    },
    {
      title: 'Hướng dẫn sử dụng',
      path: '#'
    },
    {
      sectionTitle: 'Quản lý'
    },
    {
      title: 'Dữ liệu',
      primaryPath: 'he-thong',
      children: [
        {
          title: 'Loại công trình',
          path: '/loai-cong-trinh'
        },
        {
          title: 'Loại giấy phép',
          path: '/loai-giay-phep'
        },
        {
          title: 'Doanh nghiệp',
          path: '/doanh-nghiep'
        },
        {
          title: 'Sông',
          path: '/song'
        },
        {
          title: 'Lưu vực',
          path: '/luu-vuc'
        },
        {
          title: 'Tầng chứa nước',
          path: '/tang-chua-nuoc'
        },
        {
          title: 'File hướng dẫn sử dụng',
          path: '#'
        },
      ]
    },
    {
      title: 'Hệ thống',
      primaryPath: 'he-thong',
      children: [
        {
          title: 'Nhóm người dùng',
          icon: PeopleAltOutlined,
          path: '/he-thong/nhom-nguoi-dung'
        },
        {
          title: 'Người dùng',
          icon: AccountCogOutline,
          path: '/he-thong/nguoi-dung'
        },
        {
          title: 'Trang truy cập',
          icon: Tv,
          path: '/he-thong/trang-truy-cap'
        },
        {
          title: 'Các chức năng',
          icon: Functions,
          path: '#'
        },
      ]
    },
    {
      title: 'Phân quyền',
      primaryPath: 'phan-quyen',
      children: [
        {
          title: 'Nhóm người dùng',
          icon: PeopleAltOutlined,
          path: '/phan-quyen/nhom-nguoi-dung'
        },
        {
          title: 'Người dùng',
          icon: AccountCogOutline,
          path: '/phan-quyen/nguoi-dung'
        }
      ]
    },
  ]
}

export default navigation
