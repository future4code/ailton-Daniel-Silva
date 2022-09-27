import { USER_ROLES } from "../../src/models/User"
import { ITokenPayload } from "../../src/services/Authenticator"

export class AuthenticatorMock {
    public generateToken = (payload: ITokenPayload): string => {
        switch (payload.role) {
            case USER_ROLES.NORMAL:
                return "token-mock-normal"
            default:
                return "token-mock-admin"
        }
    }

    public getTokenPayload = (token: string): ITokenPayload | null => {
        switch (token) {
            case "token-mock-normal":
                const normalPayload: ITokenPayload = {
                    id: "id-mock",
                    role: USER_ROLES.NORMAL
                }

                return normalPayload

            case "token-mock-admin":
                const adminPayload: ITokenPayload = {
                    id: "id-mock",
                    role: USER_ROLES.ADMIN
                }

                return adminPayload

                default:
                    return null
        }
    }
}