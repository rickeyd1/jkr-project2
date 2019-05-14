package com.revature.aop;

import javax.servlet.http.HttpServletResponse;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.revature.model.Users;
import com.revature.util.AuthUtil;

@Aspect
@Component
public class SessionAuthAspect {

	@Autowired
	private AuthUtil authUtil;
	
	@Around("@annotation(sec) && execution(* *(..))")
	public Object authenticate(ProceedingJoinPoint pjp, Secured sec) throws Throwable {
		Users currentUser = authUtil.getCurrentUser();
		if (currentUser == null) {
			
			HttpServletResponse res = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getResponse();
			res.getWriter().write("Unauthorized");
			res.setStatus(401);
			return null;
//			return new ResponseEntity<>("You are not authenticated", HttpStatus.UNAUTHORIZED);
		} else {
//			sec.roles() // compare with roles on current user if it had roles
			return pjp.proceed();
		}
	}
}
