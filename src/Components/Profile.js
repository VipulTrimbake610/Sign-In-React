import { useEffect, useState } from 'react';
import icon from '../Images/icon.png'

// address
// :
// { address: '1745 T Street Southeast', city: 'Washington', coordinates: {… }, postalCode: '20020', state: 'DC' }
// age
// :
// 50
// bank
// :
// { cardExpire: '06/22', cardNumber: '50380955204220685', cardType: 'maestro', currency: 'Peso', iban: 'NO17 0695 2754 967' }
// birthDate
// :
// "2000-12-25"
// bloodGroup
// :
// "A−"
// company
// :
// { address: {… }, department: 'Marketing', name: "Blanda-O'Keefe", title: 'Help Desk Operator' }
// domain
// :
// "slashdot.org"
// ein
// :
// "20-9487066"
// email
// :
// "atuny0@sohu.com"
// eyeColor
// :
// "Green"
// firstName
// :
// "Terry"
// gender
// :
// "male"
// hair
// :
// { color: 'Black', type: 'Strands' }
// height
// :
// 189
// id
// :
// 1
// image
// :
// "https://robohash.org/hicveldicta.png"
// ip
// :
// "117.29.86.254"
// lastName
// :
// "Medhurst"
// macAddress
// :
// "13:69:BA:56:A3:74"
// maidenName
// :
// "Smitham"
// password
// :
// "9uQFF1Lh"
// phone
// :
// "+63 791 675 8914"
// ssn
// :
// "661-64-2976"
// university
// :
// "Capitol University"
// userAgent
// :
// "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24"
// username
// :
// "atuny0"
// weight
// :
// 75.4
const Profile = ({status}) => {
    let [data1, setData] = useState("");

useEffect(() => {

        let id = JSON.parse(localStorage.getItem('user')).id;
        fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then(data => { console.log(data); localStorage.setItem('cUser', JSON.stringify(data)); setData(data) })
}, [])

    return (
        <>
            {
                localStorage.getItem('cUser')  && data1 &&
                <main>
            <div className="successDiv">Signup Successful!</div>
            {/* <section> */}
                <h1>Personal Details</h1>
                <div className='pDetails'>
                    <div className='pd'>
                        <label htmlFor="">IP Address </label>
                        <input className='ip' defaultValue={data1.ip} />
                    </div>
                    <div className='pd'>
                        <label htmlFor="">First Name</label>
                        <input className='fn' defaultValue={data1.firstName}/></div>
                    <div className='pd'>
                        <label htmlFor="">Last Name</label>
                        <input className='ln'  defaultValue={data1.lastName}/></div>
                    <div className='pd'>
                        <label htmlFor="">Age</label>
                        <input className='age'  defaultValue={data1.age}/> </div>
                    <div className='pd'>
                        <label htmlFor="">Username</label>
                        <input className='username'  defaultValue={data1.username}/></div>
                    <div className='pd'>
                        <label htmlFor="">Email Address</label>
                        <input className='email' defaultValue={data1.email}/></div>
                    <div className='pd'>
                        <label htmlFor="">Password</label>
                        <input className='password'  defaultValue={data1.password}/></div>
                    <div className='pd'>
                        <label htmlFor="">Gender</label>
                        <input className='gender' defaultValue={data1.gender}/></div>
                    <div className='pd'>
                        <label htmlFor="">Phone Number</label>
                        <input className='phone'  defaultValue={data1.phone}/></div>
                    <div className='pd'>
                        <label htmlFor="">Birth-Date</label>
                        <input className='birthDate'  defaultValue={data1.birthDate}/></div>
                    <div className='pd'>
                        <label htmlFor="">Blood-Group</label>
                        <input className='bloodGroup' defaultValue={data1.bloodGroup}/></div>
                    <div className='pd'>
                        <label htmlFor="">Weight</label>
                        <input className='weight' defaultValue={data1.weight}/></div>
                    <div className='pd'>
                        <label htmlFor="">Height</label>
                        <input className='height' defaultValue={data1.height}/></div>
                </div>
                <h1>Address</h1>
                <div className='addressDetails'>
                    <div className='add'>
                        <label htmlFor="">Address</label>
                        <input className="address" defaultValue={data1.address.address}/>
                    </div>
                    <div className='add'>
                        <label htmlFor="">City</label>
                        <input className="city" defaultValue={data1.address.city}/>
                    </div>
                    <div className='add'>
                        <label htmlFor="">Cordinatesess</label>
                        <input className="coordinatesess" defaultValue={data1.address.coordinates.lat +" "+ data1.address.coordinates.lng}/>
                    </div>
                    <div className='add'>
                        <label htmlFor="">PostalCode</label>
                        <input className="postalCode" defaultValue={data1.address.postalCode} />
                    </div>
                    <div className='add'>
                        <label htmlFor="">State</label>
                        <input className="state" defaultValue={data1.address.state}/>
                    </div>
                </div>
                <h1>Additional Details</h1>
                <div className='additionalDetails'>
                    <div className='ad'>
                        <label htmlFor="">Eyecolor</label>
                        <input className="eyecolor" defaultValue={data1.eyeColor}/>
                    </div>
                    <div className='ad'>
                        <label htmlFor="">Domain</label>
                        <input className="domain" defaultValue={data1.domain}/>
                    </div>
                    <div className='ad'>
                        <label htmlFor="">Ein</label>
                        <input className="ein" defaultValue={data1.ein} />
                    </div>
                    <div className='ad'>
                        <label htmlFor="">MaidenName</label>
                        <input className="maidenName" defaultValue={data1.maidenName}/>
                    </div>
                    <div className='ad'>
                        <label htmlFor="">MacAddress</label>
                        <input className="macAddress" defaultValue={data1.macAddress}/>
                    </div>
                    <div className='ad'>
                        <label htmlFor="">SSN</label>
                        <input className="ssn" defaultValue={data1.ssn}/>
                    </div>
                    <div className='ad'>
                        <label htmlFor="">University</label>
                        <input className="university" size="30" defaultValue={data1.university}/>
                    </div>
                    <div className='ad'>
                        <label htmlFor="">User-Agent</label>
                        <input className="user-agent" size="110" defaultValue={data1.userAgent}/>
                    </div>
                </div>
                <h1>Company Details</h1>
                <div className='company'>
                    <div className='c'>
                        <label htmlFor="">Address</label>
                        <input className="address" size="110" defaultValue={JSON.stringify(data1.company.address)}/>
                    </div>
                    <div className='c'>
                        <label htmlFor="">Department</label>
                        <input className="department" defaultValue={data1.company.department}/>
                    </div>
                    <div className='c'>
                        <label htmlFor="">Name</label>
                        <input className="name" defaultValue={data1.company.name}/>
                    </div>
                    <div className='c'>
                        <label htmlFor="">Title</label>
                        <input className="title" defaultValue={data1.company.title}/>
                    </div>
                </div>
                <h1>Bank Details</h1>
                <div className='bank'>
                    <div className='bnk'>
                        <label htmlFor="">cardNumber</label>
                        <input className="cardNumber" defaultValue={data1.bank.cardNumber}/>
                    </div>
                    <div className='bnk'>
                        <label htmlFor="">CardType</label>
                        <input className="cardType" defaultValue={data1.bank.cardType}/>
                    </div>
                    <div className='bnk'>
                        <label htmlFor="">CardExpire</label>
                        <input className="cardExpire" defaultValue={data1.bank.cardExpire}/>
                    </div>
                    <div className='bnk'>
                        <label htmlFor="">Currency</label>
                        <input className="currency" defaultValue={data1.bank.currency}/>
                    </div>
                    <div className='bnk'>
                        <label htmlFor="">Iban</label>
                        <input className="iban" defaultValue={data1.bank.iban}/>
                    </div>
                </div>
                <button id='btnLogout' onClick={(e)=>{e.preventDefault(); status(false);}}>Log Out</button>
        </main>
            }
            </>
    )
}


export default Profile;