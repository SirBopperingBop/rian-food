import { Button, Segmented, f7 } from "framework7-react";
import React, {useState} from "react";
import { isUserAdmin } from "../../js/auth/isUserAdmin";

const AddButton = ({f7router, tableName}) => {
    const [userAdminBool, setUserAdminBool] = useState();
    const verifyUser = async () => {
        try {
            setUserAdminBool(await isUserAdmin())
            console.log(userAdminBool);
        } catch (error) {
            console.log(error);
        }
    }
    if (userAdminBool !== true) {
        verifyUser()
    }
    
    const goForm = () => {
        f7.panel.close('#panel-right');
        f7router.navigate("/food-form/", {
            props: {
                tableName,
                preData: {}
            }
        })
    }

    return (
        <div className="add-admin-button">
            {
            userAdminBool == true &&
                <Button
                    bgColor="blue"
                    color="white"
                    onClick={goForm}
                >Add</Button>
            }
        </div>
    )
}

export default AddButton