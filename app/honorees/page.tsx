"use client"

import { useEffect } from "react"
import Head from "next/head"

export default function AdbaPage() {
  useEffect(() => {
    // Fonction pour créer le logo hexagonal
    const createHexagonLogo = () => {
      // Création de l'élément SVG
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      svg.setAttribute("id", "hexagon-logo")
      svg.setAttribute("viewBox", "0 0 200 200")
      svg.setAttribute("width", "200")
      svg.setAttribute("height", "200")

      // Définition des positions des hexagones
      const hexPositions = [
        // Centre
        [100, 100],

        // Premier anneau
        [100, 82],
        [115, 91],
        [115, 109],
        [100, 118],
        [85, 109],
        [85, 91],

        // Deuxième anneau
        [100, 64],
        [115, 73],
        [130, 82],
        [130, 100],
        [130, 118],
        [115, 127],
        [100, 136],
        [85, 127],
        [70, 118],
        [70, 100],
        [70, 82],
        [85, 73],

        // Troisième anneau (partiel)
        [100, 46],
        [115, 55],
        [130, 64],
        [145, 73],
        [145, 91],
        [145, 109],
        [145, 127],
        [130, 136],
        [115, 145],
        [100, 154],
        [85, 145],
        [70, 136],
        [55, 127],
        [55, 109],
        [55, 91],
        [55, 73],
        [70, 64],
        [85, 55],
      ]

      // Création des hexagones
      hexPositions.forEach((pos) => {
        const hex = document.createElementNS("http://www.w3.org/2000/svg", "path")
        const [x, y] = pos
        const size = 9

        // Calcul des points de l'hexagone
        let d = `M ${x},${y - size}`
        for (let i = 1; i <= 6; i++) {
          const angle = (Math.PI / 3) * i
          const pointX = x + size * Math.sin(angle)
          const pointY = y - size * Math.cos(angle)
          d += ` L ${pointX},${pointY}`
        }
        d += " Z"

        hex.setAttribute("d", d)
        hex.setAttribute("fill", "black")
        svg.appendChild(hex)
      })

      // Ajout du SVG au conteneur
      const container = document.getElementById("logo-container")
      if (container) {
        container.innerHTML = ""
        container.appendChild(svg)
      }
    }

    createHexagonLogo()

    // Recréer le logo lors du redimensionnement de la fenêtre
    window.addEventListener("resize", createHexagonLogo)

    return () => {
      window.removeEventListener("resize", createHexagonLogo)
    }
  }, [])

  return (
    <>
      <div style={{ height: '100vh' }}>
        <iframe
          src="https://adinkra-institute-murex.vercel.app/honorees"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title="Adba Honorees"
        />
    </div>
    </>
  )
}
