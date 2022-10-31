export const Header = () => {
return (
<header className="header">
    <div className="header-content">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-container">
                        <h1>RuufPay is the first crypto wallet designed for rent payments</h1>
                        <p className="p-large">The ability for crypto users to easily spend their digital assets is the most
                            significant
                            barrier to crypto adoption. That's why we created the RuufPay Wallet, which allows users to
                            make real-world payments with their crypto for the first time, starting with rent payments
                            to your landlord.
                        </p>

                        <h4>
                            Enter the crypto world for less than 1%

                        </h4>
                        <div className="buttons">
                            <a className="button as"
                                href="https://apps.apple.com/us/app/ruufpay-crypto-rent-wallet/id1557726087"
                                target="_blank"></a>
                            <a className="button gp"
                                href="https://play.google.com/store/apps/details?id=com.ruufpay.ruufpaymobileapp"
                                target="_blank"></a>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">
                    {/* <div className="image-container">
                <img className="img-fluid" src="images/mobileGraphics.png" alt="RuufPay Mobile App">
            </div>  */}
                </div>
            </div>
        </div>
    </div>
</header>
)
}