class Solution:
    def addBinary(self, a: str, b: str) -> str:
        arrA = [*a]
        arrB = [*b]
        arrA.reverse()
        arrB.reverse()

        result = 0
        for i in range(len(arrA)):
            result += pow(2, i) * int(arrA[i])

        for j in range(len(arrB)):
            result += pow(2, j) * int(arrB[j])

        return(bin(result)[2:])