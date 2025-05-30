describe("Function calculateArea", () =>{
    it("should be defined", () =>{
        expect(calculateArea).toBeDefined()
    });

    it("should take two arguments", () =>{
        expect(divide.length).toBe(2);
    });

    it("should return the rectangle area by multiplying the two numbers", () =>{
        expect( calculateArea(1,2) ).toEqual(2);
        expect( calculateArea(3,4) ).toEqual(12);
        expect( calculateArea(6,6) ).toEqual(36);
    });

    it("should return undefined if any of the arguments is not provided", () =>{
        expect( divide(1) ).toEqual(undefined);
        expect( divide() ).toEqual(undefined);
        expect( divide(undefined,1) ).toEqual(undefined);
    });
})