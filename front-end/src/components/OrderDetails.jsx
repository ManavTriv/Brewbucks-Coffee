const OrderDetails = ({orderId, orderTime, orderPrice, orderInfo, orderStatus}) => {
    return (
        <div className="rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5">
            <div className="p-3 bg-white shadow-sm rounded-xl">
                <div className="flex-col space-y-2">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <p className="text-sm font-semibold">Order ID: <span className="font-normal">{orderId}</span></p>
                            <p className="text-sm font-semibold">Order Date: <span className="font-normal">{orderTime}</span></p>
                            <p className="text-sm font-semibold">Order Price: <span className="font-normal">{orderPrice}</span></p>
                            <p className="text-sm font-semibold">Order Details: <span className="font-normal">{orderInfo}</span></p>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg h-1/2">
                            <p className="text-lg font-semibold">{orderStatus}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderDetails;