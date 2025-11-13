import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Log todos os dados recebidos
    const data: Record<string, string> = {}
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        data[key] = value
      }
    })
    
    console.log('🔍 [DEBUG API] Dados recebidos:', JSON.stringify(data, null, 2))
    console.log('🔍 [DEBUG API] Headers:', Object.fromEntries(request.headers.entries()))
    
    // Retornar os dados para debug
    return NextResponse.json({
      success: true,
      received: data,
      message: 'Dados recebidos pela API (apenas para debug)',
      note: 'Este endpoint é apenas para debug. O formulário deve ser enviado diretamente para o Netlify.'
    })
  } catch (error) {
    console.error('❌ [DEBUG API] Erro:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    }, { status: 500 })
  }
}

