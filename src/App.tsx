import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Star, Shield, Zap, Trophy, Users, Clock, CheckCircle } from 'lucide-react'

function App() {
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null)

  const offers = [
    {
      id: 1,
      title: "WELCOME BONUS",
      subtitle: "First Deposit Match",
      amount: "100%",
      bonus: "UP TO $1,000",
      description: "Double your first deposit with our generous welcome bonus",
      features: [
        "100% match on first deposit",
        "Up to $1,000 bonus money",
        "30 days to clear bonus",
        "Minimum deposit $20"
      ],
      popular: true
    },
    {
      id: 2,
      title: "FREE SPINS",
      subtitle: "No Deposit Required",
      amount: "50",
      bonus: "FREE SPINS",
      description: "Start playing immediately with 50 free spins on selected slots",
      features: [
        "50 free spins on signup",
        "No deposit required",
        "Valid for 7 days",
        "Selected slot games only"
      ],
      popular: false
    }
  ]

  const games = [
    { name: "Blackjack", category: "Table Games" },
    { name: "Lightning Roulette", category: "Live Casino" },
    { name: "Starburst", category: "Slots" },
    { name: "Mega Moolah", category: "Jackpots" },
    { name: "Baccarat", category: "Table Games" },
    { name: "Book of Dead", category: "Slots" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-headline text-2xl font-bold tracking-wider">POINTSBET</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Login
            </Button>
            <Button className="bg-accent hover:bg-accent/90">
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      {/* Welcome Offers - Moved to top priority */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-headline text-5xl md:text-7xl font-bold mb-4 tracking-wider">
              CHOOSE YOUR
              <span className="block text-accent">WELCOME OFFER</span>
            </h1>
            <p className="font-subheading text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of players and start your winning journey with one of our exclusive welcome offers
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-accent" />
                <span className="font-subheading text-sm text-gray-700">Licensed & Regulated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="font-subheading text-sm text-gray-700">500K+ Players</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-accent" />
                <span className="font-subheading text-sm text-gray-700">Award Winning</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-accent" />
                <span className="font-subheading text-sm text-gray-700">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-12">
            {offers.map((offer) => (
              <Card 
                key={offer.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer ${
                  selectedOffer === offer.id ? 'ring-4 ring-accent shadow-2xl' : ''
                } ${offer.popular ? 'border-accent border-2' : ''}`}
                onClick={() => setSelectedOffer(offer.id)}
              >
                {offer.popular && (
                  <Badge className="absolute top-4 right-4 bg-accent text-white font-subheading">
                    MOST POPULAR
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-2 md:pb-4">
                  <CardTitle className="font-headline text-lg md:text-2xl font-bold tracking-wider mb-1 md:mb-2">
                    {offer.title}
                  </CardTitle>
                  <CardDescription className="font-subheading text-sm md:text-lg text-gray-600">
                    {offer.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  <div className="mb-4 md:mb-6">
                    <div className="font-headline text-3xl md:text-5xl font-bold text-accent mb-1 md:mb-2">
                      {offer.amount}
                    </div>
                    <div className="font-subheading text-sm md:text-xl font-semibold text-gray-800">
                      {offer.bonus}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 md:mb-6 font-medium text-xs md:text-base">
                    {offer.description}
                  </p>

                  <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {offer.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 md:space-x-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                        <span className="text-xs md:text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full py-2 md:py-3 font-subheading font-semibold text-sm md:text-lg ${
                      selectedOffer === offer.id 
                        ? 'bg-accent hover:bg-accent/90' 
                        : 'bg-black hover:bg-gray-800'
                    }`}
                  >
                    CLAIM THIS OFFER
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">
              18+ only. Terms and conditions apply. Please gamble responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section - Compact version */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4 tracking-wider">
            THE PREMIER CASINO EXPERIENCE
          </h2>
          <p className="font-subheading text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the thrill of world-class casino gaming with industry-leading security, 
            instant payouts, and 24/7 customer support.
          </p>
        </div>
      </section>

      {/* Games Preview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-6xl font-bold mb-4 tracking-wider">
              FEATURED GAMES
            </h2>
            <p className="font-subheading text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular games and start playing with your welcome bonus
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {games.map((game, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-subheading font-semibold mb-1">{game.name}</h3>
                  <p className="text-sm text-gray-500">{game.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6 tracking-wider">
            READY TO WIN?
          </h2>
          <p className="font-subheading text-xl mb-8 text-gray-300">
            Join Pointsbet today and claim your welcome offer in under 2 minutes
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 font-subheading font-semibold text-lg px-12 py-4">
            GET STARTED NOW
          </Button>
          <p className="text-sm text-gray-400 mt-6">
            Already have an account? <span className="text-accent cursor-pointer hover:underline">Sign in here</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="font-headline text-xl font-bold tracking-wider">POINTSBET</span>
              </div>
              <p className="text-sm text-gray-400">
                The premier destination for online casino gaming with the best welcome offers.
              </p>
            </div>
            
            <div>
              <h4 className="font-subheading font-semibold mb-4">Games</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Slots</a></li>
                <li><a href="#" className="hover:text-white">Table Games</a></li>
                <li><a href="#" className="hover:text-white">Live Casino</a></li>
                <li><a href="#" className="hover:text-white">Jackpots</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-subheading font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Live Chat</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Responsible Gaming</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-subheading font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Licensing</a></li>
                <li><a href="#" className="hover:text-white">Complaints</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400 mb-4">
              © 2024 Pointsbet Casino. All rights reserved. Licensed and regulated by the Malta Gaming Authority.
            </p>
            <p className="text-xs text-gray-500">
              18+ only. Gambling can be addictive. Please play responsibly. BeGambleAware.org
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App