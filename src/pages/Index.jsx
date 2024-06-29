import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-cyan-400 flex flex-col items-center justify-center space-y-10 p-4">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Kotani Labs</h1>
        <p className="text-xl">
          Research and Development Lab focused on Open Source Web 3 Development
        </p>
      </header>

      <Separator className="bg-cyan-400" />

      <section className="space-y-6">
        <Card className="bg-gray-900 text-cyan-400">
          <CardHeader>
            <CardTitle className="text-2xl">Our Services</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Node Validation</li>
              <li>DeFi</li>
              <li>Roll Ups</li>
              <li>Roll Ups as a Service</li>
              <li>Decentralized Sequencers</li>
              <li>Zero Knowledge Technology</li>
              <li>The Intersection of Crypto and AI</li>
              <li>Layer 2 EVM Technology</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 text-cyan-400">
          <CardHeader>
            <CardTitle className="text-2xl">Horizon Hackerhouse Program</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              A 3-month internship program for Web 2 software developers transitioning to Web 3, as well as beginner and intermediate developers in Web 3. This program is run in partnership with Aya Collective.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="bg-cyan-400" />

      <footer className="text-center">
        <Button variant="outline" className="text-cyan-400 border-cyan-400">
          Contact Us
        </Button>
      </footer>
    </div>
  );
};

export default Index;