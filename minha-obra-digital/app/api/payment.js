import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const { price, title } = await request.json();

  const paymentIntent = await stripe.paymentIntents.create({
    amount: price,
    currency: "brl",
    description: `Compra do livro ${title}`,
  });

  return new Response(
    JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
