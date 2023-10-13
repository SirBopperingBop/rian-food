import { Button, Segmented, f7 } from "framework7-react";
import React, { useEffect, useState } from "react";
import { isUserAdmin } from "../../js/auth/isUserAdmin";

const EditDeleteButton = ({f7router, tableName, preData}) => {
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
                preData
            }
        })
    }

    const deleteFormData = async (itemId) => {
        //TODO: uncomment this when youve implemented the preData
        // const { error } = await supabase
        //     .from(tableName)
        //     .delete()
        //     .eq('id', itemId)
        // f7.dialog.alert(`Deleted ${itemId}`);
        // location.reload()
        console.log(itemId);
    }

    const promptDelete = () => {
        //TODO: uncomment this when youve implemented the preData
        // f7.dialog.confirm(`Are you sure?`, () => deleteFormData(preData.id)); 
        f7.dialog.confirm(`Are you sure?`, () => deleteFormData(preData));
    };

    return (
        <div className="segmented-admin-button">
            {
                userAdminBool == true &&
                <Segmented>
                    <Button
                        bgColor="teal"
                        color="white"
                        onClick={goForm}
                    >Edit</Button>
                    <Button
                        color="white"
                        bgColor="red"
                        onClick={promptDelete}
                    >Delete</Button>
                </Segmented>
            }
        </div>
    )
}

export default EditDeleteButton