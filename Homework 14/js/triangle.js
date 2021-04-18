class Triangle
{
    constructor(x1,y1,x2,y2,x3,y3,r,g,b)
    {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.r = r;
        this.g = g;
        this.b = b;
    }
    display()
    {
        fill(this.r, this.g, this.b);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }
}