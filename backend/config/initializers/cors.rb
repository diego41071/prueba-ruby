Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*' # O puedes poner 'http://localhost:3000' si quieres restringirlo
      resource '*', 
        headers: :any, 
        methods: [:get, :post, :put, :delete, :options]
    end
  end
  