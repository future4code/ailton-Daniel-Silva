import moment from "moment"

describe("Testando jest", () => {

    test("Verificando se o número é par ou impar", () => {
      expect(evenNumber(100)).toBe(true);
    });

    test("Verificando caixa alta", () => {
      expect(upperCase("bananinha")).toBe("BANANINHA")
    })

    test("Verificando array de strings", () => {
      expect(arrayString("dev")).toEqual(["d", "e", "v"])
    })

    test("Verificando se string virou numero", () => {
      expect(stringToNumber("50")).toBe(50)
    })

    test("Verificando tamanho da string", () => {
      expect(stringLength("jest")).toBe(4)
    })

    test("Verificando número randômico", () => {
      expect(randomValue(1, 10)).toBeLessThanOrEqual(10)
    })

    test("Verificando a usuario no array de usuarios", () => {
      const user: IUser = {
        id: "2",
        name: "Astrodev",
      };
      expect(users).toContainEqual(user)
    })

    test("Verificando a media do array", () => {
      expect(average([5, 10, 15, 20])).toEqual(13)
    })

    test("Verificando idade pelo ano", () => {
      expect(age(1992)).toBe(30)
    })

    test("Verificando a data", () => {
      expect(date("2022/09/26")).toBe("26/09/2022")
    })
})

    const evenNumber = (number: number): boolean => {
      return number % 2 === 0
    }

    const upperCase = (text: string): string => {
      const upperText = text.toUpperCase()
      return upperText
    }

    const arrayString = (text: string): string[] => {
      return text.split("")
    }

    const stringToNumber = (number: string): number => {
      const num = Number(number)
      return num
    }

    const stringLength = (text: string): number => {
      const x = text.length
      return x
    }

    const randomValue = (min: number, max: number): number => {
      return Math.random() * (max - min) + min
    }

    const average = (array: number[]): number => {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += array[i]
      }
      const average = sum / array.length
      const newAverage = Math.ceil(average)
      return newAverage
    }

    const age = (birthYear: number): number => {
      const year = new Date().getFullYear()
      const age = year - birthYear
      return age
    }
    
    const date = (date: string): string => {
      const currentDate = new Date(date)
      const rightDate = moment(currentDate).format("DD/MM/YYYY")
      return rightDate
    }

    interface IUser {
      id: string;
      name: string;
    }

    const users: IUser[] = [
      {
        id: "1",
        name: "Daniel",
      },
      {
        id: "2",
        name: "Astrodev",
      },
      {
        id: "3",
        name: "Jeff Bahmer",
      },
    ];

