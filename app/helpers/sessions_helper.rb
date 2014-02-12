module SessionsHelper

  def login(user)
    user.reset_token!
    session[:session_token] = user.authenticity_token
  end

  def logout
    current_user.reset_token!
    session[:session_token] = nil
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_authenticity_token(session[:session_token])
  end

end
