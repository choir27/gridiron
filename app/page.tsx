import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Index() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div
      className={[
        'flex flex-col items-center justify-center flex-1',
        'w-full',
      ].join(' ')}
    >
      <nav
        className={[
          'flex flex-col items-center justify-center flex-1',
          'w-full',
        ].join(' ')}
      >
        <p>Gridiron Survivor</p>
        {isSupabaseConnected ? (
          <AuthButton />
        ) : (
          'Unable to connect to authentication server. Please try again later.'
        )}
      </nav>
    </div>
  )
}
