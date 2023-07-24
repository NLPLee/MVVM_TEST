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
    this.accessToken = obj.objectForKey("result","").objectForKey("accessToken","")
    this.refreshToken = obj.objectForKey("refreshToken","").objectForKey("refreshToken","")
    this.cookieToken = obj.objectForKey("result","").objectForKey("cookieToken","")
  }

  /**
   * 유저 정보 삽입
   * @param obj
   */
  addUserInfo(obj: any) {
    this.userId = obj.objectForKey("result","").objectForKey("userId","")
    this.userName = obj.objectForKey("result","").objectForKey("userName","")
    this.userNameEn = obj.objectForKey("result","").objectForKey("userNameEn","")
    this.userNameZh = obj.objectForKey("result","").objectForKey("userNameZh","")
    this.userNameJa = obj.objectForKey("result","").objectForKey("userNameJa","")
    this.deptId = obj.objectForKey("result","").objectForKey("deptId","")
    this.deptName =  obj.objectForKey("result","").objectForKey("deptName","")
    this.deptNameEn = obj.objectForKey("result","").objectForKey("deptNameEn","")
    this.deptNameZh = obj.objectForKey("result","").objectForKey("deptNameZh","")
    this.deptNameJa = obj.objectForKey("result","").objectForKey("deptNameJa","")
    this.lastLoginDate = obj.objectForKey("result","").objectForKey("lastLoginDate","")
    this.jobClassName = obj.objectForKey("result","").objectForKey("jobClassName","")
    this.jobClassNameEn = obj.objectForKey("result","").objectForKey("jobClassNameEn","")
    this.jobClassNameZh = obj.objectForKey("result","").objectForKey("jobClassNameZh","")
    this.jobClassNameJa = obj.objectForKey("result","").objectForKey("jobClassNameJa","")
    this.jobPositionName = obj.objectForKey("result","").objectForKey("jobPositionName","")
    this.jobPositionNameEn = obj.objectForKey("result","").objectForKey("jobPositionNameEn","")
    this.jobPositionNameZh = obj.objectForKey("result","").objectForKey("jobPositionNameZh","")
    this.jobPositionNameJa = obj.objectForKey("result","").objectForKey("jobPositionNameJa","")
    this.jobFunctionName = obj.objectForKey("result","").objectForKey("jobFunctionName","")
    this.jobFunctionNameEn = obj.objectForKey("result","").objectForKey("jobFunctionNameEn","")
    this.jobFunctionNameZh = obj.objectForKey("result","").objectForKey("jobFunctionNameZh","")
    this.jobFunctionNameJa = obj.objectForKey("result","").objectForKey("jobFunctionNameJa","")
    this.companyId = obj.objectForKey("result","").objectForKey("companyId","")
    this.companyName = obj.objectForKey("result","").objectForKey("companyName","")
    this.companyNameEn = obj.objectForKey("result","").objectForKey("companyNameEn","")
    this.companyNameZh = obj.objectForKey("result","").objectForKey("companyNameZh","")
    this.companyNameJa = obj.objectForKey("result","").objectForKey("companyNameJa","")
    this.country = obj.objectForKey("result","").objectForKey("country","")
    this.locale = obj.objectForKey("result","").objectForKey("locale","")
    this.timeDiff = obj.objectForKey("result","").objectForKey("timeDiff","")
    this.font = obj.objectForKey("result","").objectForKey("font","")
    this.sysopCompList = obj.objectForKey("result","").objectForKey("sysopCompList","")
    this.photoPath = obj.objectForKey("result","").objectForKey("photoPath","")
    this.outsideYn = obj.objectForKey("result","").objectForKey("outsideYn","")
    this.email = obj.objectForKey("result","").objectForKey("email","")
    this.cellPhoneNo = obj.objectForKey("result","").objectForKey("cellPhoneNo","")
    this.loginIp = obj.objectForKey("result","").objectForKey("loginIp","")
    this.employeeNo = obj.objectForKey("result","").objectForKey("employeeNo","")
  }
}