import React, { useEffect, useState } from 'react'
import { Popover, Button, Descriptions, Icon } from 'antd';
import { useSelector } from 'react-redux';

function ProductInfo(props) {
    const user = useSelector(state => state.user)
    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }
        props.addToCart(props.detail._id)
    }
    const addToFavoritehandler = () => {
        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }
        props.addToFavorite(props.detail._id)
    }
    const rendercondition = (choice) => {
        switch(choice) {
            case 1:
              return 'Brand new';
            case 2:
              return 'New';
            case 3:
              return 'Used';
            case 4:
              return 'Good';
            case 5:
                return 'Old';
          }
    }
    const renderlevel = (choice) => {
        switch(choice) {
            case 1:
              return 'Undergraduate';
            case 2:
              return 'Graduate';
            case 3:
              return 'PHD';
          }
    }
    const rendercategory = (choice) => {
        switch(choice) {
            case 1:
              return 'Finance';
            case 2:
              return 'Physics';
            case 3:
              return 'Math';
            case 4:
              return 'Arts';
            case 5:
                return 'Music';
          }
    }
    const renderdept = (choice) => {
        switch(choice) {
            case 1:
              return 'Herbert Wertheim College of Engineering';
            case 2:
              return 'College of the Arts';
            case 3:
              return 'Warrington College of Business';
            case 4:
              return 'College of Education';
            case 5:
                return 'College of Medicine';
            case 6:
                return 'Levin College of Law';
            case 7:
                return 'Fisher School of Accounting';
          }
    }

    const content = (
      <div>
        <label><strong>Email:</strong></label><p><Icon type="mail"/> {Product.useremail}</p>
        <label><strong>Phone:</strong></label><p><Icon type="phone"/> {Product.userphone}</p>
        <label><strong>Major:</strong></label><p><Icon type="laptop"/> {Product.usermajor}</p>
        <label><strong>Address:</strong></label><p><Icon type="home"/> {Product.useraddr}</p>
        <label><strong>Bio:</strong></label><p><Icon type="rest"/> {Product.userbio}</p>
      </div>
    );

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={addToFavoritehandler}
                >
                    <Icon type="heart" />
                    </Button>
            </div>
            <Descriptions title="Details:">
                <Descriptions.Item label="Price">${Product.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="Author"> {Product.author}</Descriptions.Item>
                <Descriptions.Item label="Version"> {Product.version}</Descriptions.Item>
                <Descriptions.Item label="ISBN"> {Product.ISBN}</Descriptions.Item>
                <Descriptions.Item label="Condition"> {rendercondition(Product.condition)}</Descriptions.Item>
                <Descriptions.Item label="Course Code"> {Product.code}</Descriptions.Item>
                <Descriptions.Item label="Professor"> {Product.professor}</Descriptions.Item>
                <Descriptions.Item label="Program Level"> {renderlevel(Product.level)}</Descriptions.Item>
                <Descriptions.Item label="Category"> {rendercategory(Product.category)}</Descriptions.Item>
                <Descriptions.Item label="Department"> {renderdept(Product.department)}</Descriptions.Item>
            </Descriptions>
            <br/>
            <div>
                <label style={{fontSize:16}}><strong>Description:</strong></label><p>{Product.description}</p>
            </div>
            <div>
                <label style={{fontSize:16}}><strong>Seller:</strong></label><p><Icon type="user"/> {Product.username}  &nbsp;&nbsp;&nbsp;&nbsp; <a href="/chat"><Icon type="message"/></a> &nbsp;&nbsp;&nbsp;&nbsp; <Popover content={content} title="Seller profile" trigger="click"><a>View Profile</a></Popover></p>
            </div>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="primary"
                    onClick={addToCarthandler}
                >
                    <Icon type="shopping-cart" />Add to Cart
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo