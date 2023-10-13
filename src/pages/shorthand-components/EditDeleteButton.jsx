import { Button, Segmented, f7 } from "framework7-react";
import React from "react";
import { isUserAdmin } from "../../js/auth/isUserAdmin";

const EditDeleteButton = ({f7router, tableName, preData}) => {
    const userAdmin = isUserAdmin();

    const goForm = () => {
        f7.panel.close('#panel-right');
        f7router.navigate("/food-form/", {
            props: {
                tableName,
                preData
            }
        })
    }

    const handleDelete = () => {
        console.log("Delete");
    }
    return (
        <div className="segmented-admin-button">
            {
                userAdmin &&
                <Segmented>
                    <Button
                        bgColor="teal"
                        color="white"
                        onClick={goForm}
                    >Edit</Button>
                    <Button
                        color="white"
                        bgColor="red"
                        onClick={handleDelete}
                    >Delete</Button>
                </Segmented>
            }
        </div>
    )
}

export default EditDeleteButton