import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';

function UserId() {

    const router = useRouter();
    const { id } =router.query;

    const { isLoading, error, data } = useQuery(['userID', id], () => 
        fetch(`/api/users/${id}`).then(res => 
            res.json())
    )
    if (isLoading) {
        return (
            <h1> Loading...</h1>
        )
    }
    if (error) {
        return;
    }
    return (
        <div>
            <h1> {data.id} </h1>
        </div>
    )
}

export default UserId;