import { supabase } from "../routes";

const getAdminList = async () => {
    try {
        const { data, error } = await supabase
            .from('admin_list')
            .select('*');
        
        if (error) {
            throw error;
        }
        
        return data;
    } catch (error) {
        console.error('Error fetching admin list:', error);
        throw error;
    }
};

// Function to get the current user's session
const getUserSession = async () => {
    try {
        const { data } = await supabase.auth.getSession();
        return data ? data.session : null;
    } catch (error) {
        console.error('Error fetching user session:', error);
        throw error;
    }
};

// Function to check if the user is an admin
export const isUserAdmin = async () => {
    try {
        const adminList = await getAdminList();
        const currentSession = await getUserSession();

        if (!adminList || !currentSession) {
            console.warn('Admin list or user session not available.');
            return false;
        }

        const userMetadataEmail = currentSession.user.user_metadata.email;

        const isAdmin = adminList.some((admin) => admin.email === userMetadataEmail);

        if (isAdmin) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.error('Error checking admin status:', error);
        return false;
    }
};