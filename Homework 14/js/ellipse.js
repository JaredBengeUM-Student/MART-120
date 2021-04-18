class Ellipse
{
    constructor(x,y,d,r,g,b)
    {
        this.x = x;
        this.y = y;
        this.d = d;
        this.r = r;
        this.g = g;
        this.b = b;
    }
    display()
    {
        fill(this.r, this.g, this.b);
        circle(this.x, this.y, this.d);
    }
}