export default async function Profile({ params }:any) {
    const { id } = await params;

    return (
        <div>
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">Profile Page {id}</p>
        </div>
    );
}