

// Handle GET requests - Fetching data
export async function GET(request: Request) {
    const users = [
        
        { id: 1, name: 'Alice'},
        { id: 2, name: 'Bob'},
    ];
    return new Response(JSON.stringify(users), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function POST(request: Request) {
    // Parse the request body as JSON
    const data = await request.json();
    // Here you would typically save the data to a database or perform some other action
    return new Response(JSON.stringify({ message: 'User created successfully', data }), {
        status: 201,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}