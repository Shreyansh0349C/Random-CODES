const Header = () => {
    return (
        <div className="py-7 px-10 bg-emerald-600 text-white ">
            <h2 className="text-3xl font-bold">My React App</h2>
            <div className="flex gap-10 text-lg underline">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/product">Product</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
};

export default Header;