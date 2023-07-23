export default class LoginModel {
  accessToken = ""
  refreshToken = ""
  cookieToken = ""
  userId = ""
  userName = ""
  userNameEn = ""
  userNameZh = ""
  userNameJa = ""
  deptId = ""
  deptName =  ""
  deptNameEn = ""
  deptNameZh = ""
  deptNameJa = ""
  lastLoginDate = ""
  jobClassName = ""
  jobClassNameEn = ""
  jobClassNameZh = ""
  jobClassNameJa = ""
  jobPositionName = ""
  jobPositionNameEn = ""
  jobPositionNameZh = ""
  jobPositionNameJa = ""
  jobFunctionName = ""
  jobFunctionNameEn = ""
  jobFunctionNameZh = ""
  jobFunctionNameJa = ""
  companyId = ""
  companyName = ""
  companyNameEn = ""
  companyNameZh = ""
  companyNameJa = ""
  country = ""
  locale = ""
  timeDiff = ""
  font = ""
  sysopCompList = ""
  photoPath = ""
  outsideYn = ""
  email = ""
  cellPhoneNo = ""
  loginIp = ""
  employeeNo = ""

  // JSON Object를 각 모델 객체에 저장
  constructor(obj: any) {
    this.accessToken = obj.result.accessToken
    this.refreshToken = obj.result.refreshToken
  }


}