import Storage from "@/common/storage";

class GlobalData {
  accessTokenKey = "accessToken"

  accessToken = async (forceInit: boolean = false): Promise<string> => {
        try {
            const key = this.accessTokenKey
            // 강제초기화
            if(forceInit) {
                Storage.set(key, "")
            }

            const sAccessToken = await Storage.get(key)!.toString() as string
            if(sAccessToken.length <= 0) {
                Storage.set(key, "")
            }

            return sAccessToken
        } catch(e) {
            return ""
        }
    }

  setAccessToken(token: string) {
    const key = this.accessTokenKey
    if(token.length > 0) {
      Storage.set(key, `Bearer ${token}`)
    }

  }
}

const Global = new GlobalData();
export default Global