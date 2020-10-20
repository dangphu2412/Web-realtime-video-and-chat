export const ERROR = {
  OK: 'Lấy dữ liệu thành công',
  BAD_REQUEST: 'Mục bạn nhập sai định dạng rồi',
  UNAUTHORIZED: 'Bạn cần đăng nhập để chúng tôi biết bạn là ai',
  FORBIDDEN: 'Bạn không có quyền để thực hiện việc này',
  NOT_FOUND: 'Không tìm thấy nơi bạn muốn đến',
  CONFLICT: 'Hình như cái này đã được tạo  rồi',
  CONFLICT_FOREIGN: 'Hình như các dữ liệu liên quan đã được tạo rồi',
  INTERNAL_SERVER_ERROR: 'Server bọn mình đang có chút vấn đề, mong mấy bạn thông cảm',
};

export const BAD_INPUT = {
  NUMBER: input => `${input} định dạng không phải là số`,
  ARRAY: input => `${input} bị thiếu hoặc không thuộc định dạng mảng`,
  EMPTY: input => `${input} của bạn không được rỗng`,
  EMAIL: input => `${input} không phải là định dạng email`,
  LENTGH: (input, { min, max }) => `${input} có độ dài tối thiểu là ${min}, lớn nhất là ${max}`,
};