module SessionsHelper

  def sign_in(user)
    session[:user_name] = user.user_name
  end

  def current_user
    User.find_by_user_name(session[:user_name])
  end

  def sign_out
    session[:user_name] = nil
  end
end
