/** Shared OG / Twitter card layout (Satori-compatible JSX) */

const ROCKET_PATH =
  'm226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm155-121.5q0-33.5 23-56.5t57-23q34 0 57 23t23 56.5q0 33.5-23 56.5t-57 23q-34 0-57-23t-23-56.5ZM565-220l84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z'

export function OgCard() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        background: '#050505',
        position: 'relative',
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '55%',
          height: '90%',
          background:
            'radial-gradient(ellipse at center, rgba(172, 117, 255, 0.35) 0%, rgba(140, 26, 246, 0.12) 40%, transparent 70%)',
          display: 'flex',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '10%',
          width: '50%',
          height: '70%',
          background:
            'radial-gradient(ellipse at center, rgba(111, 131, 242, 0.15) 0%, transparent 60%)',
          display: 'flex',
        }}
      />
      {/* Left: copy */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 72,
          paddingRight: 48,
          paddingTop: 64,
          paddingBottom: 64,
          maxWidth: 720,
          zIndex: 1,
          flex: 1,
        }}
      >
        <div
          style={{
            fontSize: 13,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#AC75FF',
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          Deployment successful
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.02,
            letterSpacing: -3,
            marginBottom: 0,
          }}
        >
          Hello{' '}
          <span style={{ color: '#AC75FF' }}>Composable.</span>
        </div>
        <div
          style={{
            fontSize: 26,
            color: 'rgba(255, 255, 255, 0.72)',
            marginTop: 28,
            lineHeight: 1.45,
            fontWeight: 400,
            maxWidth: 560,
          }}
        >
          High-performance frontend hosting for composable teams. Ship on the
          edge with Contentstack Launch.
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 36,
            gap: 12,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              background: '#AC75FF',
            }}
          />
          <span
            style={{
              fontSize: 20,
              color: '#ffffff',
              fontWeight: 600,
            }}
          >
            Contentstack Launch
          </span>
        </div>
      </div>
      {/* Right: rocket */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 380,
          flexShrink: 0,
          zIndex: 1,
          paddingRight: 56,
        }}
      >
        <svg width="300" height="300" viewBox="0 -960 960 960">
          <path d={ROCKET_PATH} fill="#8C1AF6" />
        </svg>
      </div>
      {/* Bottom bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 6,
          background:
            'linear-gradient(90deg, #49A466 0%, #6F83F2 50%, #8A3DFF 100%)',
          display: 'flex',
        }}
      />
    </div>
  )
}
