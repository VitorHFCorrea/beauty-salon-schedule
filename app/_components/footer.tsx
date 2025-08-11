import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="flex flex-col gap-2 px-5 py-6">
          <p className="text-sm text-gray-400">
            © 2025 Copyright <span className="font-semibold">Beauty</span>
          </p>
          <p className="text-xs text-gray-400">
            Powered By <span className="font-semibold">Kahfujii</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
