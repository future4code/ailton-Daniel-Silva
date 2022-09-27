export class HashManagerMock {
    public hash = async (plaintext: string): Promise<string> => {

        if (plaintext === "bananinha") {
            return "hash-bananinha"
        } else {
            return "hash-mock"
        }
    }

    public compare = async (plaintext: string, hash: string): Promise<boolean> => {

        if (plaintext === "bananinha" && hash === "hash-bananinha") {
            return true
        } else {
            return false
        }
    }
}